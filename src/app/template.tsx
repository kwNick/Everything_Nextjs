import LandingPage from "@/components/LandingPage";
import PageTrans from "@/components/PageTrans";
import Lenis from "@/components/Lenis";

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Lenis>
                <PageTrans>
                    <LandingPage>
                        {children}
                        <div className="loadMe h-screen w-screen fixed top-0 left-0 z-20 bg-rose-950 " />
                    </LandingPage>
                </PageTrans>
            </Lenis>
        </>
    )
}