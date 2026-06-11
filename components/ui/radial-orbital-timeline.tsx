'use client'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceItem {
  id: number
  title: string
  description: string
  category: string
  href: string
  icon: React.ElementType
  relatedIds: number[]
  energy: number
}

interface RadialOrbitalTimelineProps {
  timelineData: ServiceItem[]
  seeLabel?: string
}

export default function RadialOrbitalTimeline({ timelineData, seeLabel = 'See' }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [rotationAngle, setRotationAngle] = useState<number>(0)
  const [autoRotate, setAutoRotate] = useState<boolean>(false)
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({})
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({})
      setActiveNodeId(null)
      setPulseEffect({})
    }
  }

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev }
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false
      })
      newState[id] = !prev[id]

      if (!prev[id]) {
        setActiveNodeId(id)
        setAutoRotate(false)
        const relatedItems = getRelatedItems(id)
        const newPulseEffect: Record<number, boolean> = {}
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true })
        setPulseEffect(newPulseEffect)
        centerViewOnNode(id)
      } else {
        setActiveNodeId(null)
        setPulseEffect({})
      }

      return newState
    })
  }

  useEffect(() => {
    if (!autoRotate) return
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.05) % 360).toFixed(3)))
    }, 50)
    return () => clearInterval(timer)
  }, [autoRotate])

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--x', e.clientX.toFixed(2))
        containerRef.current.style.setProperty('--xp', (e.clientX / window.innerWidth).toFixed(2))
        containerRef.current.style.setProperty('--y', e.clientY.toFixed(2))
        containerRef.current.style.setProperty('--yp', (e.clientY / window.innerHeight).toFixed(2))
      }
    }
    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId)
    const totalNodes = timelineData.length
    const targetAngle = (nodeIndex / totalNodes) * 360
    setRotationAngle(270 - targetAngle)
  }

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radius = 350
    const radian = (angle * Math.PI) / 180
    const x = radius * Math.cos(radian)
    const y = radius * Math.sin(radian)
    const zIndex = Math.round(100 + 50 * Math.sin(radian))
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))
    return { x, y, zIndex, opacity, bottomHalf: y > 0 }
  }

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId)
    return item ? item.relatedIds : []
  }

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false
    return getRelatedItems(activeNodeId).includes(itemId)
  }

  return (
    <div
      className="w-full h-full flex items-center justify-center relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ paddingTop: '80px' }}
          ref={orbitRef}
        >
          {/* Center orb */}
          <img
            src="/brand/Monogram%20Transparent.svg"
            alt="Compass ITS"
            className="absolute z-[200] w-40 h-40 object-contain"
            style={{
              filter: [
                'invert(1)',
                'drop-shadow(0 0 6px rgba(80,45,150,1))',
                'drop-shadow(0 0 12px rgba(80,45,150,0.9))',
                'drop-shadow(0 0 20px rgba(80,45,150,0.7))',
                'drop-shadow(0 0 30px rgba(80,45,150,0.4))',
              ].join(' '),
            }}
          />

          {/* Orbit ring — data-glow inherits --x/--y from containerRef */}
          <div
            data-glow
            className="absolute w-[700px] h-[700px] rounded-full"
            style={{
              zIndex: 49,
              '--base': '190',
              '--spread': '65',
              '--radius': '350',
              '--border': '1',
              '--backup-border': 'hsl(200 30% 30% / 0.25)',
              '--size': '820',
              '--saturation': '55',
              '--lightness': '88',
              '--border-spot-opacity': '1',
              '--border-light-opacity': '1',
              '--bg-spot-opacity': '0',
              '--border-size': 'calc(var(--border, 2) * 1px)',
              '--spotlight-size': 'calc(var(--size, 150) * 1px)',
              '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
              boxShadow: '0 0 0 var(--border-size) hsl(200 30% 30% / 0.25)',
            } as React.CSSProperties}
          />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length)
            const isExpanded = expandedItems[item.id]
            const isRelated = isRelatedToActive(item.id)
            const isPulsing = pulseEffect[item.id]
            const Icon = item.icon

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id) }}
              >
                {/* Energy glow — depth opacity here, behind the ball */}
                <div
                  className={`absolute rounded-full ${isPulsing ? 'animate-pulse' : ''}`}
                  style={{
                    opacity: isExpanded ? 1 : position.opacity,
                    background: 'radial-gradient(circle, rgba(43,179,230,0.30) 0%, rgba(43,179,230,0) 70%)',
                    width: `${item.energy * 0.75 + 70}px`,
                    height: `${item.energy * 0.75 + 70}px`,
                    left: `-${(item.energy * 0.75 + 70 - 64) / 2}px`,
                    top: `-${(item.energy * 0.75 + 70 - 64) / 2}px`,
                  }}
                />

                {/* Node circle — bg always fully opaque so ring can't bleed through */}
                <div
                  className={[
                    'w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300',
                    isExpanded
                      ? 'bg-signal border-signal shadow-lg shadow-signal/30 scale-125'
                      : isRelated
                      ? 'bg-ink border-signal/60 animate-pulse'
                      : 'bg-ink border-paper/20',
                  ].join(' ')}
                  style={{
                    borderColor: isExpanded ? undefined
                      : isRelated ? `rgba(43,179,230,${position.opacity * 0.6})`
                      : `rgba(244,242,236,${position.opacity * 0.2})`,
                  }}
                >
                  <Icon
                    size={24}
                    style={{ opacity: isExpanded ? 1 : position.opacity }}
                    className={isExpanded ? 'text-ink' : isRelated ? 'text-signal' : 'text-paper/70'}
                  />
                </div>

                {/* Label — depth opacity */}
                <div
                  className={[
                    'absolute top-[68px] left-1/2 -translate-x-1/2 whitespace-nowrap',
                    'font-barlow text-[15px] font-medium tracking-wide transition-all duration-300',
                    isExpanded ? 'text-signal' : 'text-paper/55',
                  ].join(' ')}
                  style={{ opacity: isExpanded ? 1 : position.opacity }}
                >
                  {item.title}
                </div>

                {/* Popup card */}
                {isExpanded && (
                  <div
                    className={[
                      'absolute left-1/2 -translate-x-1/2 w-72',
                      'bg-ink/95 backdrop-blur-lg border border-paper/15 rounded-xl shadow-xl shadow-black/50',
                      position.bottomHalf ? 'bottom-[112px]' : 'top-[112px]',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'absolute left-1/2 -translate-x-1/2 w-px h-4 bg-signal/30',
                        position.bottomHalf ? '-bottom-4' : '-top-4',
                      ].join(' ')}
                    />
                    <div className="p-5">
                      <span className="font-jetbrains text-[10px] text-signal/55 tracking-eyebrow uppercase block mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-barlow text-[18px] font-medium text-paper tracking-[-0.02em] leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="font-barlow text-[14px] text-paper/55 leading-snug mb-5">
                        {item.description}
                      </p>
                      {item.relatedIds.length > 0 && (
                        <div className="mb-4 pt-3 border-t border-paper/10">
                          <p className="font-jetbrains text-[9px] text-paper/30 uppercase tracking-eyebrow mb-2">
                            Related
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.relatedIds.map((relId) => {
                              const rel = timelineData.find((i) => i.id === relId)
                              return rel ? (
                                <button
                                  key={relId}
                                  className="font-archivo text-[12px] text-signal/70 hover:text-signal px-2.5 py-1 border border-signal/20 hover:border-signal/50 rounded-lg transition-colors"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relId) }}
                                >
                                  {rel.title}
                                </button>
                              ) : null
                            })}
                          </div>
                        </div>
                      )}
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 font-archivo text-[13px] font-medium text-signal uppercase tracking-cta hover:gap-2.5 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {seeLabel} {item.title}
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
