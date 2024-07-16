import ActionRenderer from "./lib/ActionRenderer";

function Home() {
  const ActionUrls = [
    "https://tiplink.io/api/blinks/donate?dest=7bQ2YzJoN7RUk7cBioy2bBvPB9GG2ZsJS7PhrfGTtPi1",
    "https://solaction.aaraz.me/",
    "https://actions.dialect.to/api/jupiter/swap/USDC-SOL",
    "https://solaction.aaraz.me/",
    "https://tiplink.io/api/blinks/donate?dest=7bQ2YzJoN7RUk7cBioy2bBvPB9GG2ZsJS7PhrfGTtPi1",
    "https://tiplink.io/api/blinks/donate?dest=7bQ2YzJoN7RUk7cBioy2bBvPB9GG2ZsJS7PhrfGTtPi1",
    "https://solaction.aaraz.me/",
    "https://tiplink.io/api/blinks/donate?dest=7bQ2YzJoN7RUk7cBioy2bBvPB9GG2ZsJS7PhrfGTtPi1",
    "https://actions.dialect.to/api/jupiter/swap/USDC-SOL",
    "https://tiplink.io/api/blinks/donate?dest=7bQ2YzJoN7RUk7cBioy2bBvPB9GG2ZsJS7PhrfGTtPi1",
    "https://tiplink.io/api/blinks/donate?dest=7bQ2YzJoN7RUk7cBioy2bBvPB9GG2ZsJS7PhrfGTtPi1",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-10 items-center bg-black min-h-screen">
      {ActionUrls.map((url, index) => {
        return (
          <div className="pt-5 pb-5 max-w-xl " key={index}>
            <ActionRenderer ActionUrl={url} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
