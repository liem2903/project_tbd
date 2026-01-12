import type { LucideProps } from "lucide-react"
import type React from "react"

type props = {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}


function Button({icon}: props) {
    return <>
        <div className="border-2 rounded-full w-6 border-violet-300">
            {icon}
        </div>
    </>
}