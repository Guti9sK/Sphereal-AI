"use client";
import Button from "@/components/Button";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import underlineImg from "@/assets/images/underline.svg?url";
import CenteredCircle from "@/components/CenteredCircle";
import Planet from "@/components/Planet";
import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMousePosition } from "./Hero";

const CallToAction = () => {
  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef<HTMLElement>(null);
  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);
  const TranslateLargeX = useTransform(springX, [0, 1], ["-25%", "25%"]);
  const TranslateLargeY = useTransform(springY, [0, 1], ["-25%", "25%"]);
  const TranslateMediumX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  const TranslateMediumY = useTransform(springY, [0, 1], ["-50%", "50%"]);
  const TranslateSmallX = useTransform(springX, [0, 1], ["-200%", "200%"]);
  const TranslateSmallY = useTransform(springY, [0, 1], ["-200%", "200%"]);
  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />
            <div className="absolute inset-0 -z-10">
              <CenteredCircle className="absolute-center" />
              <CenteredCircle className="size-[350px] absolute-center" />
              <CenteredCircle className="size-[500px] absolute-center" />
              <CenteredCircle className="size-[650px] absolute-center" />
              <CenteredCircle className="size-[800px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: TranslateLargeX,
                  y: TranslateLargeY,
                }}
              >
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-y-[200px] -translate-x-[200px] rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: TranslateLargeX,
                  y: TranslateLargeY,
                }}
              >
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-x-[200px] -translate-y-[200px] -rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: TranslateMediumX,
                  y: TranslateMediumY,
                }}
              >
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-x-[500px] rotate-90"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: TranslateMediumX,
                  y: TranslateMediumY,
                }}
              >
                <Planet
                  size="md"
                  color="teal"
                  className="translate-x-[500px] -translate-y-[100px] -rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: TranslateSmallX,
                  y: TranslateSmallY,
                }}
              >
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[400px] -translate-y-[200px] rotate-135"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: TranslateSmallX,
                  y: TranslateSmallY,
                }}
              >
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="translate-x-[400px] translate-y-[150px] -rotate-45"
                />
              </motion.div>
            </div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl text-center leading-tight max-w-3xl mx-auto">
              Join the AI Revolution with{" "}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute h-4 w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-400),var(--color-teal-400),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImg.src})`,
                    maskSize: "contain",
                    maskPosition: "top",
                    maskRepeat: "no-repeat",
                  }}
                />
              </span>
            </h2>
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
              Experience the transformative power of AI with Sphereal. Boost
              your productivity and stramline your workflow with our innovative
              AI chat platform.
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
