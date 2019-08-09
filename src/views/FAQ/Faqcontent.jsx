import React, { Component } from 'react';
import { Collapse } from 'antd';
import { Paper, Typography, Container } from '@material-ui/core';
const { Panel } = Collapse;

class Faqcontent extends Component {
    render() {
        return (
            <div>
                <Paper
                    style={{
                        height: '6vh',
                        position: 'relative',
                        background: '#d0b808'
                    }}>
                    <Typography
                        style={{
                            color: '#2F4F4F',
                            top: '50%',
                            left: '50%',
                            marginRight: '-50%',
                            transform: 'translate(-50%,-50%)',
                            position: 'absolute',
                            fontWeight: 'Bold'
                        }}
                        variant="h1">
                        DETAILS
                        </Typography>
                </Paper>
                <Container style={{ height: "80vh" }} >
                    <Collapse accordion>
                        <Panel header="How to enroll to the course?" key="1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                        <Panel header="Did I get a certificate after complete the course?" key="2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                        <Panel header="Is course certificate verified?" key="3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                        <Panel header="Can I cancel course that I already enrolled?" key="4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                        <Panel header="How to submit my course rating?" key="5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                        <Panel header="Where can I check my enrolled course?" key="6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                        <Panel header="Where can I see my certificate?" key="7">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                        <Panel header="Does course certificate have a link to view online?" key="8">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis officiis ducimus quidem voluptatibus nihil veniam delectus labore omnis! Recusandae laudantium facere fuga minus perspiciatis necessitatibus saepe cum et assumenda earum, distinctio maxime voluptatibus omnis officia odio placeat ratione! Consectetur nesciunt dolore, sequi harum earum maiores, distinctio voluptas tenetur sapiente quasi, accusantium sed neque. Ipsum tempora sint necessitatibus iure veritatis, dolore molestias unde quidem, ullam ut eligendi inventore, autem nisi. Aliquid illo vitae voluptates neque reprehenderit odit delectus exercitationem. Facilis itaque voluptatibus sed quidem ea nemo, dolorum, placeat atque deleniti illum explicabo. Facere, esse corrupti veritatis ab odit quae repudiandae, error dignissimos cumque delectus debitis, commodi distinctio eligendi sint qui animi veniam explicabo iure exercitationem eaque. Possimus veritatis consequuntur, blanditiis quas molestias eos, in fugit nesciunt eaque quo saepe aperiam! Quidem soluta aliquid vel dolorum veniam, facere nostrum possimus molestias minima quisquam porro ducimus dolorem alias, assumenda eius iusto at?</p>
                        </Panel>
                    </Collapse>
                </Container>
            </div>
        );
    }
}

export default Faqcontent;