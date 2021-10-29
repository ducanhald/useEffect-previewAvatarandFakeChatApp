import { useEffect, useState } from "react";
function PreviewAvatar() {
  const [avatar, setAvatar] = useState();
  function handlePreviewAvatar(e) {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  }
  useEffect(() => {
    //  clean up
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="50%" />}
    </div>
  );
}
export default PreviewAvatar;
