import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  GLASS_CARD,
  type Translation,
} from "@/types/portfolio"

gsap.registerPlugin(ScrollTrigger)

type ProjectsProps = {
  t: Translation["projects"]
  isVisible: boolean
}

type ProjectCarouselProps = {
  images: string[]
  title: string
  labels: Translation["projects"]["carousel"]
}

function ProjectCarousel({
  images,
  title,
  labels,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false)

  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updatePreference()

    mediaQuery.addEventListener("change", updatePreference)

    return () => {
      mediaQuery.removeEventListener("change", updatePreference)
    }
  }, [])

  useEffect(() => {
    if (
      images.length <= 1 ||
      isPaused ||
      prefersReducedMotion
    ) {
      return
    }

    const interval = window.setInterval(() => {
      setCurrentIndex(
        (current) => (current + 1) % images.length,
      )
    }, 4500)

    return () => {
      window.clearInterval(interval)
    }
  }, [
    images.length,
    isPaused,
    prefersReducedMotion,
  ])

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null

    touchStartY.current =
      event.touches[0]?.clientY ?? null

    setIsPaused(true)
  }

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return
    }

    const touchEndX =
      event.changedTouches[0]?.clientX ??
      touchStartX.current

    const touchEndY =
      event.changedTouches[0]?.clientY ??
      touchStartY.current

    const deltaX =
      touchEndX - touchStartX.current

    const deltaY =
      touchEndY - touchStartY.current

    const minimumSwipeDistance = 50

    if (
      Math.abs(deltaX) > minimumSwipeDistance &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      setCurrentIndex((current) => {
        if (deltaX > 0) {
          return current === 0
            ? images.length - 1
            : current - 1
        }

        return (current + 1) % images.length
      })
    }

    touchStartX.current = null
    touchStartY.current = null

    setIsPaused(false)
  }

  if (images.length === 0) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center lg:min-h-0">
        <span className="text-sm text-black/40">
          {labels.previewUnavailable}
        </span>
      </div>
    )
  }

  return (
    <div
      className="
        relative
        h-full
        min-h-[420px]
        select-none
        overflow-hidden
        lg:min-h-0
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${title} — ${labels.goToImage} ${index + 1}`}
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            ${
              prefersReducedMotion
                ? ""
                : "transition-opacity duration-700 ease-out"
            }
            ${
              index === currentIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
          loading={index === 0 ? "eager" : "lazy"}
          draggable={false}
        />
      ))}

      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-6
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-2
            rounded-full
            border
            border-black/10
            bg-white/80
            px-3
            py-2
            shadow-lg
            backdrop-blur-sm
          "
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`${labels.goToImage} ${
                index + 1
              } — ${title}`}
              aria-current={index === currentIndex}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-black
                focus-visible:ring-offset-2
                ${
                  index === currentIndex
                    ? "w-6 bg-black"
                    : "w-1.5 bg-black/25 hover:bg-black/50"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects({
  t,
  isVisible,
}: ProjectsProps) {
  const sectionRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (!isVisible || !sectionRef.current) {
      return
    }

    const section = sectionRef.current

    const ctx = gsap.context(() => {
      const mediaQuery = window.matchMedia(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      )

      if (!mediaQuery.matches) {
        return
      }

      const wrappers =
        gsap.utils.toArray<HTMLElement>(
          ".project-card-wrapper",
          section,
        )

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".project-card",
          section,
        )

      if (
        wrappers.length <= 1 ||
        cards.length !== wrappers.length
      ) {
        return
      }

      cards.forEach((card, index) => {
        const nextWrapper = wrappers[index + 1]

        if (!nextWrapper) {
          return
        }

        gsap.fromTo(
          card,
          {
            scale: 1,
          },
          {
            scale: 0.88,
            ease: "none",
            scrollTrigger: {
              id: `project-scale-${index + 1}`,
              trigger: nextWrapper,
              start: "top 85%",
              end: "top 80px",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      })

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }, section)

    return () => {
      ctx.revert()
    }
  }, [isVisible, t.items.length])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`
        px-6
        pb-40
        pt-32
        transition-all
        duration-1000
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
      `}
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          className="
            mb-20
            text-center
            text-[clamp(2.5rem,5vw,4.5rem)]
            font-black
            uppercase
            leading-[0.9]
            tracking-[-0.05em]
            text-black
          "
        >
          {t.title} {t.titleHighlight}
        </h2>

        <div className="flex flex-col gap-10 lg:gap-16">
          {t.items.map((project, index) => {
            const hasSite = Boolean(project.site)
            const hasGithub = Boolean(project.github)

            return (
              <div
                key={project.title}
                className="
                  project-card-wrapper
                  relative
                  w-full
                  lg:min-h-[calc(100vh-8rem)]
                "
                style={{
                  zIndex: index + 1,
                }}
              >
                <article
                  className={`
                    project-card
                    relative
                    w-full
                    overflow-hidden
                    rounded-[32px]
                    ${GLASS_CARD}
                    lg:sticky
                    lg:top-20
                    lg:h-[calc(100vh-8rem)]
                  `}
                >
                  <div
                    className="
                      grid
                      min-h-[620px]
                      lg:h-full
                      lg:min-h-[620px]
                      lg:grid-cols-2
                    "
                  >
                    <div
                      className="
                        flex
                        flex-col
                        justify-between
                        p-8
                        sm:p-10
                        lg:p-12
                        xl:p-16
                      "
                    >
                      <div>
                        <div
                          className="
                            mb-8
                            flex
                            items-center
                            justify-between
                            gap-6
                          "
                        >
                          <span
                            className="
                              text-sm
                              font-medium
                              uppercase
                              tracking-[0.18em]
                              text-black/45
                            "
                          >
                            {project.category}
                          </span>

                          <div className="flex items-center gap-4">
                            <span
                              className="
                                text-sm
                                font-medium
                                tracking-[0.08em]
                                text-black/45
                              "
                            >
                              {project.year}
                            </span>

                            <span
                              aria-hidden="true"
                              className="
                                text-sm
                                font-medium
                                tracking-[0.08em]
                                text-black/25
                              "
                            >
                              {project.number}
                            </span>
                          </div>
                        </div>

                        <h3
                          className="
                            max-w-[700px]
                            text-[clamp(3rem,6vw,6.5rem)]
                            font-black
                            uppercase
                            leading-[0.82]
                            tracking-[-0.06em]
                            text-black
                          "
                        >
                          {project.title}
                        </h3>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="
                                rounded-full
                                border
                                border-black/10
                                px-3
                                py-1.5
                                text-xs
                                font-medium
                                text-black/65
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-12">
                        <p
                          className="
                            max-w-[620px]
                            text-base
                            leading-relaxed
                            text-black/60
                            sm:text-lg
                          "
                        >
                          {project.description}
                        </p>

                        {(hasSite || hasGithub) && (
                          <div className="mt-8 flex flex-wrap gap-3">
                            {hasSite && (
                              <a
                                href={project.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-full
                                  border
                                  border-black
                                  bg-black
                                  px-6
                                  py-3
                                  text-sm
                                  font-semibold
                                  text-white
                                  transition-all
                                  duration-300
                                  hover:-translate-y-0.5
                                  hover:bg-black/85
                                  focus-visible:outline-none
                                  focus-visible:ring-2
                                  focus-visible:ring-black
                                  focus-visible:ring-offset-2
                                "
                              >
                                {t.viewSite}

                                <span aria-hidden="true">
                                  ↗
                                </span>
                              </a>
                            )}

                            {hasGithub && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-full
                                  border
                                  border-black/15
                                  bg-transparent
                                  px-6
                                  py-3
                                  text-sm
                                  font-semibold
                                  text-black
                                  transition-all
                                  duration-300
                                  hover:-translate-y-0.5
                                  hover:border-black
                                  hover:bg-black
                                  hover:text-white
                                  focus-visible:outline-none
                                  focus-visible:ring-2
                                  focus-visible:ring-black
                                  focus-visible:ring-offset-2
                                "
                              >
                                {t.viewGithub}

                                <span aria-hidden="true">
                                  ↗
                                </span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className="
                        relative
                        min-h-[420px]
                        overflow-hidden
                        lg:min-h-0
                      "
                    >
                      <ProjectCarousel
                        images={project.images}
                        title={project.title}
                        labels={t.carousel}
                      />
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}