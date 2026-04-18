import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GithubActivity() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="border border-[var(--border)] bg-[var(--card)] shadow-lg rounded-md p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GitHubCalendar
          username="jethermasidong"
          colorScheme={isDark ? "dark" : "light"}
          theme={{
            light: ["#f3f3f0", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9"],
            dark: ["#ffffff2f", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9"],
          }}
          blockSize={12}
          blockMargin={5}
          fontSize={14}
          showWeekdayLabels={false}
        />
      </motion.div>
    </div>
  );
}