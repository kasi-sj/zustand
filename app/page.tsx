'use client'
import { useCounterStore } from "@/store";
import Counter from "../components/Counter";
import ButtonDecrement from "@/components/buttonDecrement";
import ButtonIncrement from "@/components/buttonIncrement";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log('count:', count);
}

const setCount = (count : number) => {
  useCounterStore.setState({count: count});
}

export default function Home() {
  const count = useCounterStore((state)=>state.count);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Counter count={count} />
      </div>
      <div className="flex flex-row gap-4">
        <ButtonDecrement />
        <ButtonIncrement />
      </div>
    </main>
  );
}