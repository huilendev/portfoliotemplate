"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface ProjectModalProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    description: string
    tags: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <div className="sticky top-0 flex justify-end p-4 bg-background border-b border-border">
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-muted rounded transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Image */}
                <div className="relative w-full h-96 mb-6 rounded overflow-hidden bg-muted">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{project.category}</p>
                    <h3 className="text-3xl font-serif font-light text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-base text-foreground leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
