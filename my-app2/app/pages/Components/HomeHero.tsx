

function HomeHero() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="/57860-486852732_small (1).mp4"
      />
    </div>
  );
}

export default HomeHero;