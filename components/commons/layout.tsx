"use client";

import * as React from "react";
import {PropsWithChildren, useEffect, useRef, useState} from "react";
import {ChartColumnBig, FlagTriangleRight, Home, LandPlot, MapPinned, Notebook, Package,} from "lucide-react";

import {cn} from "@/lib/utils";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup,} from "@/components/ui/resizable";

import {TooltipProvider} from "@/components/ui/tooltip"; 
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {NavBar} from "@/components/commons/nav";
import {AccountSwitcher} from "@/components/commons/setting/icon";
import {useProfile} from "@/contexts/profile-context";
import {ApprovalOverlay} from "@/app/dashboard/components/account-approval";

interface LayoutProps {
    defaultLayout: [number, number];
    defaultCollapsed?: boolean;
    navCollapsedSize: number;
}

export function LayoutComponent({
                                    defaultCollapsed = true,
                                    children,
                                }: PropsWithChildren<LayoutProps>) {
    const {profile} = useProfile()
    const panelRef = useRef<any>(null);


    useEffect(() => {
        if (defaultCollapsed && panelRef.current?.collapse) {
            panelRef.current.collapse();
        }
    }, [defaultCollapsed]);




    return (
        <div>{children}</div>
    );
}
