"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      console.log(data);
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes: ", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setIsLoading(true);
      if (editingId) {
        const res = await fetch(`/api/notes/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        });

        if (res.ok) {
          await fetchNotes();
          setEditingId(null);
          setTitle("");
          setContent("");
          alert("Note updated successfully");
        }
      } else {
        const res = await fetch("/api/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        });

        if (res.ok) {
          await fetchNotes();
          alert("Notes created successfully");
          setTitle("");
          setContent("");
        }
      }
    } catch (error) {
      console.log("Error saving note : ", error);
      alert("Error saving note");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (note) => {
    setEditingId(note._id);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure")) return;
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchNotes();
      }
    } catch (error) {
      console.error("Error in deleting note  :", error);
      alert("Error deleting note");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">My Notes</h1>
          <p className="text-gray-400">
            Create, read, update and delete your notes
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-8 border border-gray-800">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title..."
                className=" w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Content
              </label>
              <textarea
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                placeholder="Enter note content..."
                className=" w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full font-bold rounded-lg bg-yellow-500 text-black py-2 cursor-pointer hover:bg-yellow-400"
              >
                {isLoading
                  ? "Saving..."
                  : editingId
                    ? "Updating Note"
                    : "Add Note"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="w-full font-bold rounded-lg bg-gray-500 text-black py-2 cursor-pointer hover:bg-yellow-400"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.length === 0 ? (
            <div>
              <p>No notes yet. Create one to get started!</p>
            </div>
          ) : (
            notes.map((note) => (
              <div
                key={note._id}
                className="border p-4 bg-gray-900 rounded-lg "
              >
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <p>{new Date(note.createdAt).toLocaleDateString()}</p>

                <div className="flex flex-row gap-3 my-3">
                  <button
                    className="border bg-yellow-400 rounded-lg py-1 px-4 w-full font-bold cursor-pointer"
                    onClick={() => handleEdit(note)}
                  >
                    Edit
                  </button>
                  <button
                    className="border bg-red-600 rounded-lg py- px-4 w-full text-white font-bold cursor-pointer "
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
