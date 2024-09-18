const Card = ({ courseId, courseName, courseDescription, coursePartner }) => {
  return (
    <div
      key={courseId}
      className="card flex cursor-pointer flex-col gap-4 p-4 shadow hover:shadow-md"
    >
      <h6 className="font-bold text-black">{courseName}</h6>
      <p className="text-gray">{courseDescription}</p>
      <div className="flex items-center gap-2">
        <div>
          {coursePartner?.map(({ logo }) => (
            <img src={logo} className="h-4 w-4"></img>
          ))}
        </div>
        <div>
          {coursePartner?.map(({ title }) => (
            <span className="text-gray">{title}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
