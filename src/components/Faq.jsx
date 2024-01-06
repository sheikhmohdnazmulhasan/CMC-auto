import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";

// eslint-disable-next-line react/prop-types
export const Faq = ({ title1, des1, title2, des2, title3, des3, title4, des4 }) => {

    return (
        <Accordion className="rounded-md space-y-2 bg-black hover:bg-black pb-20">
            <Accordion.Panel>
                <Accordion.Container className=" text-white !bg-black">
                    <Accordion.Title className="text-white bg-black h-full w-full">{title1}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="bg-black text-white">
                    {des1}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Container className="!bg-black text-white">
                    <Accordion.Title className="text-white bg-black h-full w-full">{title2}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="bg-black text-white">
                    {des2}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Container className=" text-white !bg-black">
                    <Accordion.Title className="text-white bg-black h-full w-full">{title3}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="!bg-black text-white">
                    {des3}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Container className=" text-white !bg-black">
                    <Accordion.Title className="text-white bg-black h-full w-full">{title4}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content className="bg-black text-white">
                    {des4}
                </Accordion.Content>
            </Accordion.Panel>


        </Accordion>
    )
}
