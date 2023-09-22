import '../App.css'

function Timeline() {
  const timeline = [
    {
      id: 1,
      title: "Hackathon announcement",
      description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      id: 2,
      title: "Team Registration Begins",
      description: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      id: 3,
      title: "Team Registration ends",
      description: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      id: 4,
      title: "Announcement of the accepted teams and ideas",
      description: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      id: 5,
      title: "Getlinked Hackathon 1.0 Officially Begins",
      description: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      id: 6,
      title: "Demo Day",
      description: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];

  return (
    <div className="relative">
      <div className="w-4/5 mx-auto md:pt-12 relative z-10 space-y-12 md:space-y-8 timeline">
        {/* single position in time */}
        {timeline.map((timeline) => (
          <div key={timeline.id} className="relative grid md:grid-cols-7 items-center">
            <div className="title-section md:col-span-3 space-y-3">
              <h1 className="font-bold text-fuchsia-500 md:text-xl">
                {timeline.title}
              </h1>
              <p>
                {timeline.description}</p>
            </div>

            <div className="aboslute md:static -mb-10 -ml-[20%] sm:-ml-[17%] col-span-1 rounded-full w-12 h-12 flex items-center justify-center md:mx-auto font-bold border-[6px] border-kinda-purple bg-gradient-to-l from-purple-600 to-fuchsia-500">
              {timeline.id}
            </div>
            <div className="date-section md:col-span-3 text-fuchsia-500 font-bold md:text-lg">
              {timeline.date}
            </div>
          </div>
        ))}
      </div>

      {/* the literal timeline */}
      <div className="absolute z-0 top-0 right-0 left-0 md:mx-auto w-1 h-full md:h-[95%] bg-gradient-to-l from-purple-600 to-fuchsia-500"></div>
    </div>
  );
}

export default Timeline;
