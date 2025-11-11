"use client"

import { motion } from "framer-motion"
import { portfolioConfig } from "@/lib/portfolio-config"
import { Mail, MapPin } from "lucide-react"

export function About() {
  const { name, bio, location, email, socialLinks } = portfolioConfig.personal

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="about" className="w-full py-24 md:py-32 px-4 md:px-8 lg:px-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8 md:mb-12">About</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Bio section */}
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">{bio}</p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Follow</p>
              <div className="flex gap-4">
                {Object.entries(socialLinks).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
                  >
                    {key}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
