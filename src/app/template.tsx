import PageTrans from "@/components/PageTrans";

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <>
            <PageTrans>
                {children}
                <div className="loadMe h-screen w-screen fixed top-0 left-0 z-20 bg-rose-950 " />
            </PageTrans>
        </>
    )
}