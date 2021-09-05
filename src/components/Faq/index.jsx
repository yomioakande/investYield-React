import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/theme.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  GeneralQuestions,
  SafetySecurity,
  Savings,
  BVN,
  TargetGroup,
  Interest,
  Withdrawals,
  FeesCharges,
  Referrals,
} from "./data";
const Index = () => {
  return (
    <div className="container">
      <div className="row mt-60">
        <div className="col-lg-12">
          <h2 className="faqs-title mb-2">Frequently Asked Questions FAQs</h2>
          <div className="small-red-line"></div>

          {/* General Questions */}
          <div className="mt-5">
            <h3>General Questions</h3>
            <div className="small-red-line mb-3 mt-3"></div>
            <Accordion allowZeroExpanded>
              {GeneralQuestions.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-5">
            <h3>Safety & Security</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
            
              {SafetySecurity.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-5">
            <h3>Savings</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
              {Savings.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-5">
            <h3>BVN</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
              {BVN.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-5">
            <h3>Target and Group Savings</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
              {TargetGroup.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-5">
            <h3>Interest</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
              {Interest.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-5">
            <h3>Withdrawals</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
              {Withdrawals.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-5">
            <h3>Fees & Charges</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
              {FeesCharges.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-5">
            <h3>Referral</h3>
            <div className="small-red-line mb-3 mt-3"></div>

            <Accordion allowZeroExpanded>
              {Referrals.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item?.answer1}</AccordionItemPanel>
                  {item?.answer2 ? (
                    <AccordionItemPanel>{item?.answer2}</AccordionItemPanel>
                  ) : null}

                  {item?.answer3 ? (
                    <AccordionItemPanel>{item?.answer3}</AccordionItemPanel>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
