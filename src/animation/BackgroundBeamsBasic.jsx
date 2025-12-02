import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams"

export default function BackgroundBeamsBasic() {
    return (
        <div className="h-[40rem] w-full bg-white relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Background Beams
                </h1>
                <p className=" max-w-lg mx-auto my-2 text-black text-sm text-center relative z-10">
                    Welcome to the background beams component. This is a simple example of how to use the
                    BackgroundBeams component. Have fun building your next project.
                </p>
            </div>
            <BackgroundBeams />
        </div>
    )
}
