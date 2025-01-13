
import {NextPage} from "next";
// import {DeliveryI} from '@nanahq/sticky'
// import {cn} from "@/lib/utils";
// import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
// import {Separator} from "@/components/ui/separator";
// import {Select, SelectTrigger, SelectItem, SelectValue, SelectGroup, SelectContent} from "@/components/ui/select";
// // import {useState, useCallback} from "react";
// import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
// import {Button} from "@/components/ui/button";
// import {Plus} from "lucide-react";
// import {AddDriverModal} from "@/app/dashboard/components/add-driver-modal";
// import {DriverList} from "@/app/dashboard/components/driver-list";
// import {useDrivers} from "@/contexts/drivers-context";
// import {DriverDisplay} from "@/app/dashboard/components/driver-display";

 enum DeliveryTypes  {
    'FOOD' = 'FOOD',
    'GROCERIES'  = 'GROCERIES',
    'PARCEL' = 'PARCEL',
    'ALL' = 'ALL'
}
const DashboardPage:NextPage = () => {
    // const [openModal, setOpenModal] = useState(false)
    const {drivers, selectedDriver, setSelectedDriver} = useDrivers()

    // const handleOpen = useCallback(() => {
    //     setOpenModal(prev => !prev)
    // }, [])

    // const handleDriverSelect = useCallback((driver: any) => {
    //     setSelectedDriver(driver)
    // }, [setSelectedDriver])

    return (
        <>
            
            {/* <AddDriverModal open={openModal} setOpen={setOpenModal} /> */}
        </>
    );
}

export default DashboardPage
