"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

const technologies = [
  { name: "Next.js", icon: "TS", image: "https://i.ibb.co/k5T9wBV/Next-js.png" },
  { name: "Node.js", image:"https://i.ibb.co/yy1Jz0n/Node-js.png" },
  { name: "Java", image: "https://i.ibb.co/QYbQZH4/Java.png" },
  { name: "JavaScript", image: "https://i.ibb.co/TMj022X/Java-Script.png" },
  { name: "AWS", image: "https://i.ibb.co/NpR1yvT/AWS.png" },
  {name:"Spring", image:"https://i.ibb.co/fSvW8d8/Spring.png"},
  {name:"Postgre", image:"https://i.ibb.co/SywY91W/Postgres-SQL.png"},
  {name:"React", image:"https://i.ibb.co/QmHz2bx/React.png"},
  {name:"MongoDB", image:"https://i.ibb.co/qCY8gtZ/MongoDB.png"},
  {name:"Python", image:"https://i.ibb.co/xGGgTTT/Python.png"},
  {name:"Postman", image:"https://i.ibb.co/5K6LdGh/Postman.png"},
  {name:"Docker", image:"https://i.ibb.co/v4zZB1W/Docker.png"},
  {name:"Kubernetes", image:"https://i.ibb.co/dt4rtPn/Kubernetes.png"},
  {name:"Hibernate", image:"https://i.ibb.co/rbw5XjL/Hibernate.png"},
];

export function TechPlayground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine>();
  const renderRef = useRef<Matter.Render>();
  const boxesRef = useRef<Matter.Body[]>([]);

  const resetBoxes = () => {
    if (!engineRef.current || !renderRef.current || !boxesRef.current.length) return;

    // Track positions for new reset
    let xPosition = 50;
    let yPosition = 50;
    const maxWidth = renderRef.current.canvas.width;
    const boxSize = 60;
    const padding = 10;

    boxesRef.current.forEach((box, i) => {
      if (xPosition + boxSize + padding > maxWidth) {
        // Move to the next row if the box exceeds the width
        xPosition = 50; // Reset x to start at the left again
        yPosition += boxSize + padding; // Move down by box height + padding
      }

      // Reset the position of each box
      Matter.Body.setPosition(box, {
        x: xPosition,
        y: yPosition,
      });
      Matter.Body.setVelocity(box, { x: 0, y: 0 });
      Matter.Body.setAngularVelocity(box, 0);
      Matter.Body.setAngle(box, 0);

      // Update x position for the next box
      xPosition += boxSize + padding;
    });
  };

  useEffect(() => {
    if (!sceneRef.current) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create({
      gravity: { x: 0, y: 1, scale: 0.001 },
    });
    engineRef.current = engine;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: 300,
        background: "transparent",
        wireframes: false,
      },
    });
    renderRef.current = render;

    const walls = [
      Bodies.rectangle(render.canvas.width / 2, render.canvas.height + 30, render.canvas.width, 60, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(-30, render.canvas.height / 2, 60, render.canvas.height, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(render.canvas.width + 30, render.canvas.height / 2, 60, render.canvas.height, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(render.canvas.width / 2, -30, render.canvas.width, 60, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
    ];

    const boxSize = 60;
    const padding = 10;
    let xPosition = 50;
    let yPosition = 50;
    const maxWidth = render.canvas.width;
    const boxes = technologies.map((tech, i) => {
      if (xPosition + boxSize + padding > maxWidth) {
        // Move to the next row if the box exceeds the width
        xPosition = 50; // Reset x to start at the left again
        yPosition += boxSize + padding; // Move down by box height + padding
      }

      const box = Bodies.rectangle(xPosition, yPosition, boxSize, boxSize, {
        render: {
          sprite: {
            texture: tech.image,
            xScale: 1, // Temporary values
            yScale: 1,
          },
        },
        chamfer: { radius: 15 },
        friction: 0.8,
        restitution: 0.3,
      });

      // Adjust sprite scale to fit the box
      if (tech.image) {
        const img = new Image();
        img.src = tech.image;
        img.onload = () => {
          const scaleX = boxSize / img.width;
          const scaleY = boxSize / img.height;
          box.render.sprite.xScale = Math.min(scaleX, scaleY);
          box.render.sprite.yScale = Math.min(scaleX, scaleY);
        };
      }

      xPosition += boxSize + padding; // Move to the next x position
      return box;
    });

    boxesRef.current = boxes;

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, [...walls, ...boxes, mouseConstraint]);

    Engine.run(engine);
    Render.run(render);

    return () => {
      if (render) {
        Render.stop(render);
        World.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
      }
    };
  }, []);

  return (
    <div className="relative h-[300px] rounded-3xl bg-muted/50 overflow-hidden">
      <div ref={sceneRef} className="absolute inset-0">
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <h3 className="text-lg font-semibold">Playground!</h3>
          <Button variant="outline" size="sm" className="rounded-full" onClick={resetBoxes}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

