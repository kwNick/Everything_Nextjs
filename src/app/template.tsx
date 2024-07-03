import PageTrans from "@/components/PageTrans";
import Lenis from "@/components/Lenis";
import LandingHeader from "@/components/LandingHeader";

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Lenis>
                <PageTrans>
                    <LandingHeader>
                        {children}
                        <div className="loadMe h-screen w-screen fixed top-0 left-0 z-20 bg-rose-950 " />
                    </LandingHeader>
                </PageTrans>
            </Lenis>
        </>
    )
}