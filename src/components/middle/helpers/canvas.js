import { randomElement, randomFloat, randomInt } from "../../../utils/chance";

const initial = canvas => {
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    return {
        ctx,
        width: canvas.width,
        height: canvas.height
    }
}

const canvasAnimations = {
    blackHole(canvas, color, duration, centralElement) {
        const { ctx, width, height } = initial(canvas);

        const count = 900;
        const particles = [];

        var centralX = width / 2;
        var centralY = height / 2;

        if (centralElement) {
            let canvasBox = canvas.getBoundingClientRect();
            let elementBox = centralElement.getBoundingClientRect();

            centralX = (elementBox.x + elementBox.width / 2) - canvasBox.x;
            centralY = (elementBox.y + elementBox.height / 2) - canvasBox.y;
        }

        for (let i = 0; i < count; i++) {
            var size = randomInt(5, 15);

            var [ x, y ] = randomElement([
                [ randomInt(-size * 5, -size * 70), randomInt(-size * 5, height + size) ],
                [ randomInt(-size * 5, width + size), randomInt(-size * 5, -size * 70) ],
                [ randomInt(width + size, width + size * 70), randomInt(-size * 5, height + size) ],
                [ randomInt(-size * 5, width + size), randomInt(width + size, height + size * 70) ],
            ]);

            var vx = (centralX - x) / 1000000;
            var vy = (centralY - y) / 1000000;

            particles.push({ 
                width: size,
                height: size,
                alpha: randomInt(35, 100) / 100,
                rotation: 0,
                vr: randomInt(25, 75) / 100 * 5,
                x, y, vx, vy 
            });
        }

        var acceleration = 0.0000008;
        var shouldRender = true;
        var lastTime = new Date().getTime();
        var frames = 0;

        const Render = () => {
            if (!shouldRender || !particles.length) return;

            var now = new Date().getTime();
            var dt = now - lastTime;

            ctx.clearRect(0, 0, width, height);

            particles.forEach((particle, i) => {
                ctx.globalAlpha = particle.alpha * Math.min(frames / 180000, 1);
                particle.rotation -= particle.vr;

                ctx.save();
                ctx.translate(centralX, centralY);
                ctx.rotate(particle.rotation * Math.PI / 180);
                ctx.translate(-centralX, -centralY);

                ctx.fillStyle = color;
                ctx.fillRect(particle.x, particle.y, particle.width, particle.height);
                ctx.restore();

                particle.x += particle.vx * dt;
                particle.y += particle.vy * dt;

                particle.vx += acceleration * Math.sign(particle.vx);
                particle.vy += acceleration * Math.sign(particle.vy);

                particle.alpha -= 0.0022;

                if (particle.alpha <= 0) {
                    particles.splice(i, 1);
                }

                frames += 1;
            });

            requestAnimationFrame(Render);
        }

        Render();
        setTimeout(() => shouldRender = false, duration);
    },

    centralAcceleration(canvas, duration) {
        const { ctx, width, height } = initial(canvas);
        
        const cx = width / 2;
        const cy = height / 2;

        const Scene = [];

        for (let i = 0; i < 100; i++) {
            var size = 2;

            var [ dx, dy ] = randomElement([
                [ randomInt(-size, -size * 35), randomInt(-size, height + size) ],
                [ randomInt(-size, width + size), randomInt(-size, -size * 35) ],
                [ randomInt(width + size, width + size * 35), randomInt(-size, height + size) ],
                [ randomInt(-size, width + size), randomInt(width + size, height + size * 35) ],
            ]);

            var vx = (cx - dx) / 50;
            var vy = (cy - dy) / 50;

            Scene.push({ vx, vy, x: cx, y: cy });
        }

        var shouldRender = true;
        var alpha = 0.5;

        const Render = () => {
            if (!shouldRender) return;

            ctx.globalAlpha = alpha;
            ctx.clearRect(0, 0, width, height);

            Scene.forEach((line, i, arr) => {
                let real = arr[i];

                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 2;

                real.x += line.vx;
                real.y += line.vy;

                ctx.beginPath();
                ctx.lineCap = "round";
                ctx.moveTo(cx, cy);
                ctx.lineTo(real.x, real.y);
                ctx.stroke();
                ctx.closePath();
            });

            requestAnimationFrame(Render);
        }

        Render();
        setTimeout(() => shouldRender = false, duration);
    },

    centralParticles(canvas, color = "#fff", count = 200, centralElement, customConfig) {
        const { ctx, width, height } = initial(canvas);

        customConfig = customConfig || {};

        var Scene = [];
        const gravitation = customConfig.gravitation || 0.0008;

        var cx = width / 2;
        var cy = height / 2;

        if (centralElement) {
            let canvasBox = canvas.getBoundingClientRect();
            let elementBox = centralElement.getBoundingClientRect();

            cx = (elementBox.x + elementBox.width / 2) - canvasBox.x;
            cy = (elementBox.y + elementBox.height / 2) - canvasBox.y;
        }

        if (customConfig.elements) Scene = customConfig.elements;
        else {
            for (let i = 0; i < count; i++) {
                let size = randomInt(5, 15);
    
                Scene.push({
                    x: cx,
                    y: cy,
                    s: size,
                    a: randomFloat(0.15, 0.65),
                    vx: randomFloat(-2, 2),
                    vy: randomFloat(-3, 3)
                });
            }    
        }

        var lastTime = new Date().getTime();

        const Render = () => {
            if (!Scene.length) return;

            var now = new Date().getTime();
            var dt = now - lastTime;
            lastTime = now;

            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = 1;
            ctx.fillStyle = color;

            Scene.forEach((obj, i, arr) => {
                let real = arr[i];

                real.x += real.vx * dt;
                real.y += real.vy * dt;
                real.vy += gravitation * dt;

                ctx.globalAlpha = obj.a;

                if (obj.img) {
                    ctx.drawImage(obj.img, obj.x, obj.y, obj.s, obj.s);
                } else { 
                    ctx.fillRect(obj.x, obj.y, obj.s, obj.s);
                }

                if (real.y > height) {
                    Scene.splice(i, 1);
                }
            });

            requestAnimationFrame(Render);
        }

        Render();
    }
}

export default canvasAnimations;