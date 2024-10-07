export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Seo-Ingyo Portfolio. All rights reserved.</p>
    </footer>
  );
}