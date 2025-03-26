document.addEventListener("DOMContentLoaded", function () {
  let draggableElements = document.querySelectorAll(".korz");

  draggableElements.forEach(draggableElement => {
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    function startDrag(clientX, clientY) {
      isDragging = true;
      draggableElement.style.userSelect = "none";

      let rect = draggableElement.getBoundingClientRect();
      offsetX = clientX - rect.left + window.scrollX;
      offsetY = clientY - rect.top + window.scrollY;

      draggableElement.style.position = "absolute";
      draggableElement.style.zIndex = "1000";
      draggableElement.style.left = `${rect.left + window.scrollX}px`;
      draggableElement.style.top = `${rect.top + window.scrollY}px`;
    }

    function doDrag(clientX, clientY) {
      if (!isDragging) return;
      let x = clientX - offsetX + window.scrollX;
      let y = clientY - offsetY + window.scrollY;
      draggableElement.style.left = `${x}px`;
      draggableElement.style.top = `${y}px`;
    }

    function stopDrag() {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    }

    function onMouseDown(event) {
      startDrag(event.clientX, event.clientY);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(event) {
      doDrag(event.clientX, event.clientY);
    }

    function onMouseUp() {
      stopDrag();
    }

    function onTouchStart(event) {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        startDrag(touch.clientX, touch.clientY);
        document.addEventListener("touchmove", onTouchMove, { passive: false });
        document.addEventListener("touchend", onTouchEnd);
      }
    }

    function onTouchMove(event) {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        doDrag(touch.clientX, touch.clientY);
        event.preventDefault(); // чтобы страница не скроллилась
      }
    }

    function onTouchEnd() {
      stopDrag();
    }

    draggableElement.addEventListener("mousedown", onMouseDown);
    draggableElement.addEventListener("touchstart", onTouchStart);

    draggableElement.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
  });
});