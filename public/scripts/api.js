export async function updateAvatar(avatarName) {
  try {
    const response = await fetch("/avatar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: avatarName }), // Wrap in an object
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error updating profile: ", error);
    throw error;
  }
}

export async function getDoc(docTitle) {
  try {
    const response = await fetch(`/note?title=${encodeURIComponent(docTitle)}`);

    if (!response.ok) {
      throw new Error("Failed to fetch Document");
    }

    const data = await response.text(); // expecting html response
    return data;
  } catch (error) {
    console.error("Error Fetching Document: ", error);
    throw error;
  }
}

export async function addDoc(doc, docTitle) {
  try {
    const response = await fetch("/note/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: docTitle, doc: doc }),
    });
    if (!response.ok) {
      throw new Error("Failed to save document");
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error updating profile: ", error);
    throw error;
  }
}

export async function deleteDoc(docTitle) {
  try {
    const response = await fetch("/note", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title: docTitle }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete document");
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error removing document: ", error);
    throw error;
  }
}

export async function exportDoc(doc, filename, type) {
  try {
    const response = await fetch("/note/export", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename: filename, doc: doc, type:type }),
    });
    if (!response.ok) {
      throw new Error("Failed to export document");
    }
    const data = await response.blob();
    return data;
  } catch (error) {
    console.error("Error saving Document: ", error);
    throw error;
  }
}
