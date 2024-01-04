import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";

// eslint-disable-next-line react/prop-types
export const Faq = ({ title1, des1, title2, des2, title3, des3, title4, des4 }) => {

    return (
        <Accordion className="rounded-md space-y-2">
            <Accordion.Panel>
                <Accordion.Container>
                    <Accordion.Title>{title1}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content>
                    {des1}
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Container>
                    <Accordion.Title>{title2}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content>
                    {des2}
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Container>
                    <Accordion.Title>{title3}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content>
                    {des3}
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Container>
                    <Accordion.Title>{title4}</Accordion.Title>
                    <Accordion.Icon>
                        <Plus size={24} color="#444" />
                    </Accordion.Icon>
                </Accordion.Container>
                <Accordion.Content>
                    {des4}
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}
