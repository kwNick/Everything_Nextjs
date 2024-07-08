export default function Template({ children }: { children: React.ReactNode }) {
    console.log("Nested Template!");

    return (
        <>
            {children}
        </>
    );
};