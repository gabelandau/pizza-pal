'use client';

import { useRef, useState } from 'react';

import Button from '@/components/Button';
import FormInput from '@/components/FormInput';

export default function Calculator() {
  const finalMassRef = useRef<HTMLInputElement>(null);
  const doughCountRef = useRef<HTMLInputElement>(null);
  const finalHydrationRef = useRef<HTMLInputElement>(null);

  const [flourAdded, setFlourAdded] = useState(0);
  const [waterAdded, setWaterAdded] = useState(0);
  const [starterAdded, setStarterAdded] = useState(0);

  function runCalculation() {
    setFlourAdded(0);
    setWaterAdded(0);
    setStarterAdded(0);

    if (!(finalMassRef.current?.value && doughCountRef.current?.value && finalHydrationRef.current?.value)) {
      return;
    }

    const finalMass = parseFloat(finalMassRef.current.value);
    const doughCount = parseFloat(doughCountRef.current?.value);
    const finalHydration = parseFloat(finalHydrationRef.current?.value) / 100;

    const starterAmount = (finalMass / 10) * doughCount;
    const starterStandard = starterAmount / 2;
    const totalFlour = Math.round((finalMass / (1 + finalHydration)) * doughCount);
    const totalWater = Math.round(((finalHydration * finalMass) / (1 + finalHydration)) * doughCount);

    setStarterAdded(Math.round(starterAmount));
    setFlourAdded(Math.round(totalFlour - starterStandard));
    setWaterAdded(Math.round(totalWater - starterStandard));
  }

  return (
    <div>
      <div className="space-y-2">
        <div>
          <div className="text-lg font-bold">Settings</div>
          <div className="isolate -space-y-px rounded-md shadow-sm">
            <FormInput
              reference={finalMassRef}
              label="Final Dough Mass"
              type="number"
              defaultValue="360"
              helper="grams (g)"
              position="top"
            />
            <FormInput
              reference={doughCountRef}
              label="Number of Doughs"
              type="number"
              defaultValue="5"
            />
            <FormInput
              reference={finalHydrationRef}
              label="Final Hydration"
              type="number"
              defaultValue="69"
              helper="%"
              position="bottom"
            />
          </div>
        </div>
        <div className="flex w-full justify-end gap-2">
          <Button
            onClick={() => {}}
            variant="secondary"
          >
            Reset
          </Button>
          <Button onClick={() => runCalculation()}>Calculate</Button>
        </div>
      </div>
      {flourAdded !== 0 && waterAdded !== 0 && (
        <div className="flex justify-center gap-8 pt-8">
          <div className="flex flex-col items-end gap-1">
            <div className="text-3xl font-bold">{flourAdded}g</div>
            <div className="text-slate-400">flour</div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-3xl font-bold">{waterAdded}g</div>
            <div className="text-slate-400">water</div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-3xl font-bold">{starterAdded}g</div>
            <div className="text-slate-400">starter</div>
          </div>
        </div>
      )}
    </div>
  );
}
