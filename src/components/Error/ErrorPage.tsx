import Link from "next/link";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-fuchsia-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-xl w-full text-center">
        {/* 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry — premium tools are just one click away.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:opacity-90"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 backdrop-blur transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Footer Hint */}
        <p className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} PROITTOOLSBd · Secure · Premium · Trusted
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
