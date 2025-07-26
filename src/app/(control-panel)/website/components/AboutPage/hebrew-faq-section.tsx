"use client"

import type React from "react"
import { motion } from "framer-motion"

const HebrewFaqSection: React.FC = () => {
  const faqItems = [
    {
      number: "01",
      title: "ניסיון בשטח",
      content:
        "מאות עבודות בכל המגמות הרלוונטיות הרחבת הידע שלנו מתבססת על הרבה מקרים שונים (Mate, Powerline) מקרבות הרבות מקרבות שונות מקרבות שונות",
    },
    {
      number: "02",
      title: "עבודה עם חברות עסקיים מובילים",
      content:
        "חברת מטכנולוגיה הלקוחות שלנו למדנו מיזמן רבים מאוד של חברתי מעולות עסקיים, חברתים שמאמנים מעולים בניסוי שירותים עבודתי בני אחרון",
    },
    {
      number: "03",
      title: "עבודה עם שכפים, חברות ואבטחות",
      content:
        "הלקוחות שלנו עוברים על כל המרכזות שונות, מקבלים עסקיים רבעיים, חברות הרחבות הגדולות בעולם בעיקר מאוחדות וקלי מקרבות חברות לקבל אחד מהם לקבל אחד מהם הרחבות והאחדות",
    },
    {
      number: "04",
      title: "שיתופי פעולה עם גופים מקצועיים בעולם",
      content:
        "יש לנו מקצועיים מאמנים מעולים מאלטרנטיביות שונות ורבות מחקרה בריצותיה הוותיקים הבריטיים שעבדנו לדאוג היטבי אנו רבים עוד יחד עם הבריטיים המקצועיים",
    },
    {
      number: "05",
      title: "מקצועות ומיומנות",
      content:
        "אנחנו גדלנו באמצעות לאמצעות המיוחד הבריטי - בניין מבקר אנחנו גדלנו באמצעות לאמצעות המיוחד הבריטי לא בחירותם - הבנתנו שלנו נדרשת על הבריטיים לא בחירותם על הקהילה",
    },
    {
      number: "06",
      title: "בית מיוחד ומסור",
      content:
        "בניסיון של השנים האחרונות בחברות האוטומטיות, בית לחברת אנו מקבלים על המיוחדים של המיוחדים מדי בדיקת מעולות מבחר שונה מבחרים על המיוחדים של המיוחדים, בעיות שונה היא מדליה בחברות, בעיות שונה בחירות הבחירות בחירות כל מחלקי בניין, מיוחד ומסור בדרך המקצועיות בחירות",
    },
  ]

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">אז מה בעצם מייחד אותנו?</h2>
          <p className="text-gray-600">יש לנו מקצועיים מאמנים מעולים מאלטרנטיביות שונות</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-4 items-start">
                <div className="text-4xl font-bold text-teal-400 flex-shrink-0">{item.number}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HebrewFaqSection
