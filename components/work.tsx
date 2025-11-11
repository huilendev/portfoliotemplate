"use client"

import { motion } from "framer-motion"
import { portfolioConfig } from "@/lib/portfolio-config"
import { ProjectModal } from "./project-modal"
import { useState } from "react"
import Image from "next/image"

export function Work() {
  const { projects } = portfolioConfig
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="work" className="w-full py-24 md:py-32 px-4 md:px-8 lg:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">Work</h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              {/* Project card */}
              <div className="space-y-4">
                {/* Image container */}
                <div className="relative w-full aspect-square rounded overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Project info */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{project.category}</p>
                  <h3 className="text-lg font-serif font-light text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project modal */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
