import Container from "@/Components/Container";
import { IconlySetting } from "@/Icons/IconlySetting";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#263D66] font-semibold text-white text-[11px] py-4">
            <Container>
                <div className="flex justify-between">
                    <div>Copyright Pikora Star Tech. All Rights Reserved</div>
                    {/* <div className='flex gap-2 items-center'><IconlySetting size="20" color='#ffffff' /> Languange Preferences</div> */}
                </div>
            </Container>
        </footer>
    );
}
