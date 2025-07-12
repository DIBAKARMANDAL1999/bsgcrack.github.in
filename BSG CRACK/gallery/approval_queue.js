// approval_queue.js

export const pendingItems = [
  { type: "image", name: "campfire.jpg", uploadedBy: "Dibakar", status: "Pending" },
  { type: "video", name: "flag_ceremony.mp4", uploadedBy: "Anik", status: "Pending" }
];

export function getPendingApprovals() {
  return pendingItems.map(item => {
    return `Type: ${item.type}, Name: ${item.name}, By: ${item.uploadedBy}, Status: ${item.status}`;
  }).join("\n");
}