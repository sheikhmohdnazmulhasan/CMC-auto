import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";

// eslint-disable-next-line react/prop-types
export const Faq = ({ title1, des1, title2, des2, title3, des3, title4, des4 }) => {

    return (
        <Accordion className="rounded-md space-y-2  pb-20">
            <Accordion.Panel>
                <Accordion.Container className=" text-white !bg-[#1b1a1a] bg-opacity-20">
                    <Accordion.Title className="text-white ">{title1}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#fff" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="bg-black text-white">
                    {des1}
                </Accordion.Content>
            </Accordion.Panel>

            
            <Accordion.Panel>
                <Accordion.Container className=" text-white !bg-[#1b1a1a] bg-opacity-20">
                    <Accordion.Title className="text-white ">{title2}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#fff" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="bg-black text-white">
                    {des2}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Container className=" text-white !bg-[#1b1a1a] bg-opacity-20">
                    <Accordion.Title className="text-white ">{title3}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#fff" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="bg-black text-white">
                    {des4}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Container className=" text-white !bg-[#1b1a1a] bg-opacity-20">
                    <Accordion.Title className="text-white ">{title4}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#fff" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="bg-black text-white">
                    {des4}
                </Accordion.Content>
            </Accordion.Panel>


        </Accordion>
    )
}
