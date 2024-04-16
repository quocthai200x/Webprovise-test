import { PageProps } from "../types";

const PageLayout = ({ children }: PageProps) => {
    return (
        <div className="flex w-screen h-screen justify-center md:mt-40">
            <div className="w-[590px] p-2">
            {children}
            </div>
        </div>
    );
}

export default PageLayout;