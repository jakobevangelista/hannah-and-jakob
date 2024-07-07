export default function FourtyOne() {
  return (
    <div className="flex w-screen flex-col items-center justify-center text-center font-mono text-2xl">
      <div>I get to see you in 6 hours!</div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZoAjIZ8jQmI?si=9uJsReikDqYuEYy3"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
