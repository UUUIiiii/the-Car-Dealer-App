export default function Main({children, className}) {
    return (
        <main className="relative">
            <div className={`relative z-20 m-auto gap-16 pt-[34px] w-[1440px] ${className}`}>
                {children}
            </div>
        </main>
    );
  }