"use client";
import robotImg from "@/assets/images/robot.jpg";
import underlineImg from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader-animated.svg";
import Button from "@/components/Button";
import Image from "next/image";
import CenteredCircle from "@/components/CenteredCircle";
import Planet from "@/components/Planet";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  }, [clientX, clientY]);
  return { xProgress, yProgress };
};

const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const TransformedY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
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
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <CenteredCircle className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <CenteredCircle className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <CenteredCircle className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <CenteredCircle className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <CenteredCircle className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white-100 text-center leading-tight">
              Unlock the Future of AI Conversations with{" "}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute h-4 w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-400),var(--color-teal-400),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImg.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                />
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-6 max-w-3xl mx-auto">
              Harness the power of AI Sphereal. Elevate your productivity and
              streamline your workflow with our cutting-ede AI chat platform.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-12">
                Start chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  style={{
                    x: TranslateLargeX,
                    y: TranslateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="md:-translate-x-[300px] lg:-translate-x-[427px] -translate-y-[125px] rotate-135 hidden md:block"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: TranslateLargeX,
                    y: TranslateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-y-[205px] md:translate-x-[330px] lg:translate-x-[372px] -rotate-135 hidden md:block"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: TranslateSmallX,
                    y: TranslateSmallY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-y-[371px] -translate-x-[510px] rotate-135 hidden md:block"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: TranslateMediumX,
                    y: TranslateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="-translate-y-[344px] translate-x-[510px] -rotate-135 hidden md:block"
                  />
                </motion.div>
              </div>
              <div className="absolute top-[30%] left-0 z-10 -translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: TransformedY,
                  }}
                >
                  <p>Can you generate an incredible frontend dev project?.</p>
                  <p className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-[50%] right-0 z-10 translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: TransformedY,
                  }}
                >
                  <p>
                    <strong>Brainwave: </strong>I created one based on this
                    prompt.
                  </p>
                  <p className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </p>
                </motion.div>
              </div>
              <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative">
                <Image src={robotImg} alt="robot image" />
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-full  max-w-xs">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating{" "}
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
