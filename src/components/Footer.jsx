export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-10 pb-10 mt-20">
      <div className="border-t border-gray-200 w-full mb-6" />

      <div className="text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Jether Masidong. All rights reserved.</p>
      </div>
    </footer>
  );
}