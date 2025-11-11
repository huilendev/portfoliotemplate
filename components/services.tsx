"use client"

import type React from "react"

import { motion } from "framer-motion"
import { portfolioConfig } from "@/lib/portfolio-config"
import { Palette, Sparkles, Layout } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  palette: Palette,
  sparkles: Sparkles,
  layout: Layout,
}

export function Services() {
  const { services } = portfolioConfig

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-8 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">Services</h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Palette

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 text-foreground" />
                </div>

                {/* Service details */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-serif font-light text-foreground">{service.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
