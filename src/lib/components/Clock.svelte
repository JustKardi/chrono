<script lang="ts">
    import { onMount } from "svelte";

    let hourHand: SVGGElement | undefined = $state();
    let minuteHand: SVGGElement | undefined = $state();
    let secondHand: SVGGElement | undefined = $state();

    function tickClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;
        
        renderClock(hours, minutes, seconds)
    }
    
    function renderClock(hours: number, minutes: number, seconds: number) {
        if (!hourHand || !minuteHand || !secondHand) return;

        const secondDeg = seconds * 6;
        const minuteDeg = minutes * 6 + seconds * 0.1;
        const hourDeg = hours * 30 + minutes * 0.5;
    
        secondHand.setAttribute("transform", `rotate(${secondDeg}, 0, 0)`);
        minuteHand.setAttribute("transform", `rotate(${minuteDeg}, 0, 0)`);
        hourHand.setAttribute("transform", `rotate(${hourDeg}, 0, 0)`);
    }

    onMount(() => {
        tickClock();

        let tickInterval: ReturnType<typeof setInterval>;

        const syncTimeout = setTimeout(
            () => {
                tickClock();
                tickInterval = setInterval(tickClock, 1000);
            },
            1000 - (Date.now() % 1000),
        );

        return () => {
            clearTimeout(syncTimeout)
            clearInterval(tickInterval)
        };
    });
</script>

<svg viewBox="-100 -100 200 200" class="clock-hands clock">
    <g class="clock-numbers">
        <text x="0" y="-82">XII</text>
        <text x="41" y="-71">I</text>
        <text x="71" y="-41">II</text>
        <text x="82" y="0">III</text>
        <text x="71" y="41">IV</text>
        <text x="41" y="71">V</text>
        <text x="0" y="82">VI</text>
        <text x="-41" y="71">VII</text>
        <text x="-71" y="41">VIII</text>
        <text x="-82" y="0">IX</text>
        <text x="-71" y="-41">X</text>
        <text x="-41" y="-71">XI</text>
    </g>
    <g bind:this={hourHand}>
        <polygon
            pathLength="100"
            class="hour_svg"
            points="-10.000,-1.800 -3.516,-1.800 -3.319,-2.141 -3.089,-2.461 -2.829,-2.757 -2.540,-3.025 -2.226,-3.263 -1.890,-3.468 -1.535,-3.640 -1.165,-3.774 -0.783,-3.872 -0.393,-3.930 -0.000,-3.950 0.393,-3.930 0.783,-3.872 1.165,-3.774 1.535,-3.640 1.890,-3.468 2.226,-3.263 2.540,-3.025 2.829,-2.757 3.089,-2.461 3.319,-2.141 3.516,-1.800 31.900,-1.800 42.900,-5.000 55.000,0.000 42.900,5.000 31.900,1.800 3.516,1.800 3.319,2.141 3.089,2.461 2.829,2.757 2.540,3.025 2.226,3.263 1.890,3.468 1.535,3.640 1.165,3.774 0.783,3.872 0.393,3.930 -0.000,3.950 -0.393,3.930 -0.783,3.872 -1.165,3.774 -1.535,3.640 -1.890,3.468 -2.226,3.263 -2.540,3.025 -2.829,2.757 -3.089,2.461 -3.319,2.141 -3.516,1.800 -10.000,1.800"
            fill="none"
            stroke="#13cb28"
            stroke-width="0.5"
            stroke-linejoin="round"
        />
    </g>
    <g bind:this={minuteHand}>
        <polygon
            pathLength="100"
            class="minute_svg"
            points="-12.000,-1.680 -2.485,-1.680 -2.246,-1.988 -1.969,-2.263 -1.659,-2.500 -1.320,-2.694 -0.959,-2.843 -0.582,-2.943 -0.195,-2.994 0.195,-2.994 0.582,-2.943 0.959,-2.843 1.320,-2.694 1.659,-2.500 1.969,-2.263 2.246,-1.988 2.485,-1.680 46.400,-1.680 62.400,-4.000 80.000,0.000 62.400,4.000 46.400,1.680 2.485,1.680 2.246,1.988 1.969,2.263 1.659,2.500 1.320,2.694 0.959,2.843 0.582,2.943 0.195,2.994 -0.195,2.994 -0.582,2.943 -0.959,2.843 -1.320,2.694 -1.659,2.500 -1.969,2.263 -2.246,1.988 -2.485,1.680 -12.000,1.680"
            fill="none"
            stroke="#13cb28"
            stroke-width="0.5"
            stroke-linejoin="round"
        />
    </g>
    <g bind:this={secondHand}>
        <polygon
            pathLength="100"
            class="second_svg"
            points="-14.000,-0.900 -1.442,-0.900 -1.205,-1.199 -0.907,-1.438 -0.563,-1.604 -0.191,-1.689 0.191,-1.689 0.563,-1.604 0.907,-1.438 1.205,-1.199 1.442,-0.900 82.800,-0.900 90.000,0.000 82.800,0.900 1.442,0.900 1.205,1.199 0.907,1.438 0.563,1.604 0.191,1.689 -0.191,1.689 -0.563,1.604 -0.907,1.438 -1.205,1.199 -1.442,0.900 -14.000,0.900"
            fill="none"
            stroke="#13cb28"
            stroke-width="0.5"
            stroke-linejoin="round"
        />
    </g>
</svg>

<style>
    .clock {
        background-color: #0b0c0d;
        border-radius: 100%;
        border: 0.1rem solid #13cb28;
        box-shadow: 0px 0px 100px 10px rgba(19, 203, 40, 0.5);
        pointer-events: none;
        opacity: 0.9;
        transition: opacity 0.1s ease-out;
    }
    .clock-hands {
        transform: rotate(-90deg);
    }
    .hour_svg {
        stroke: #13cb28;
        animation-delay: 0.1s;
    }
    .minute_svg {
        stroke: #0d981d;
        animation-delay: 0.3s;
    }
    .second_svg {
        stroke: #096c14;
        animation-delay: 0.5s;
    }
    .clock-hands text {
        fill: #13cb28;
        font-size: 0.5vw;
        font-weight: bold;

        text-anchor: middle;
        dominant-baseline: central;

        user-select: none;

        transform: rotate(90deg);

        box-shadow: 0px 0px 20px 3px #0b0c0d;
    }
    .clock-hands polygon {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;

        animation: drawHand 1.5s ease-out forwards;

        z-index: -1000;
    }

    @keyframes drawHand {
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
