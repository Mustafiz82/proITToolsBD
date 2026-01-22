
import Link from 'next/link';

const LoginGetStarted = () => {
    return (
        <>
            <Link
                href="/login"
                className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
                Login
            </Link>
            <Link href={"/signup"} className="bg-primary hover:bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)] cursor-pointer active:scale-95">
                Get Started
            </Link>
        </>
    );
};

export default LoginGetStarted;