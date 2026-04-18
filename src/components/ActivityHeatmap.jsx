import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubActivity() {
  return (
    <div className="border border-black/5 shadow-lg rounded-md p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GitHubCalendar
          username="jethermasidong"
          colorScheme="light"
          theme={{
            light: [
            "#f3f3f0",
            "#bae6fd",
            "#7dd3fc",
            "#38bdf8",
            "#0ea5e9",
            ],
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