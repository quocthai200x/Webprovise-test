import { PageProps } from "../types";

const PageLayout = ({ children }: PageProps) => {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="w-[590px]">
            {children}
            </div>
        </div>
    );
}

export default PageLayout;