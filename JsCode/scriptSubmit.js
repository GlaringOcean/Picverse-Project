// Submission Page Script Interactions

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("submissionForm");
  const fileInput = document.getElementById("upload");
  const fileContainer = document.getElementById("fileUploadContainer");
  const fileInfo = document.getElementById("fileInfo");
  const successMessage = document.getElementById("successMessage");

  // Drag and drop highlight
  ["dragenter", "dragover"].forEach(event => {
    fileContainer.addEventListener(event, (e) => {
      e.preventDefault();
      fileContainer.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach(event => {
    fileContainer.addEventListener(event, (e) => {
      e.preventDefault();
      fileContainer.classList.remove("dragover");
    });
  });

  // Handle file drop
  fileContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      displayFileInfo(files[0]);
    }
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      displayFileInfo(fileInput.files[0]);
    }
  });

  function displayFileInfo(file) {
    fileInfo.style.display = "block";
    fileInfo.textContent = `📁 Selected file: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`;
  }

  // Real-time validation
  const fields = ['email', 'title', 'description', 'tags', 'category'];
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    field.addEventListener('blur', () => validateField(fieldId));
    field.addEventListener('input', () => clearError(fieldId));
    // Also listen to change event for select dropdown
    if (field.tagName === 'SELECT') {
      field.addEventListener('change', () => clearError(fieldId));
    }
  });

  // Real-time validation for radio buttons
  document.querySelectorAll('input[name="ai_generated"]').forEach(radio => {
    radio.addEventListener('change', () => clearError('ai'));
  });

  // Real-time validation for file upload
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      clearError('upload');
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Validate all fields
    const fieldsToValidate = ['email', 'title', 'description', 'tags', 'category', 'upload', 'ai'];
    fieldsToValidate.forEach(field => {
      if (!validateField(field)) {
        valid = false;
      }
    });

    if (valid) {
      successMessage.style.display = "block";
      form.reset();
      fileInfo.style.display = "none";
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth' });
      
      // Clear all error states
      fieldsToValidate.forEach(field => clearError(field));
    }
  });

  function validateField(fieldName) {
    let isValid = true;
    let errorMessage = "";

    switch (fieldName) {
      case 'email':
        const email = document.getElementById('email').value;
        if (!email) {
          errorMessage = "Please fill out this field.";
          isValid = false;
        } else if (!validateEmail(email)) {
          errorMessage = "Please enter a valid email address.";
          isValid = false;
        }
        break;

      case 'title':
        const title = document.getElementById('title').value;
        if (!title.trim()) {
          errorMessage = "Title is required.";
          isValid = false;
        }
        break;

      case 'description':
        const description = document.getElementById('description').value;
        if (!description.trim()) {
          errorMessage = "Description is required.";
          isValid = false;
        }
        break;

      case 'tags':
        const tags = document.getElementById('tags').value;
        if (!tags.trim()) {
          errorMessage = "Tags are required.";
          isValid = false;
        }
        break;

      case 'category':
        const category = document.getElementById('category').value;
        if (!category) {
          errorMessage = "Category must be selected.";
          isValid = false;
        }
        break;

      case 'upload':
        if (!fileInput.files.length) {
          errorMessage = "Please upload an artwork file.";
          isValid = false;
        } else {
          const file = fileInput.files[0];
          if (!validateFileType(file)) {
            errorMessage = "Please upload a PNG, JPG, or JPEG file.";
            isValid = false;
          } else if (!validateFileSize(file)) {
            errorMessage = "File size must be less than 10MB.";
            isValid = false;
          }
        }
        break;

      case 'ai':
        const aiGenerated = document.querySelector("input[name='ai_generated']:checked");
        if (!aiGenerated) {
          errorMessage = "Please specify if this artwork is AI-generated.";
          isValid = false;
        }
        break;
    }

    if (!isValid) {
      showError(fieldName, errorMessage);
    } else {
      clearError(fieldName);
    }

    return isValid;
  }

  function validateEmail(email) {
    // Simple email validation without regex
    const parts = email.split('@');
    if (parts.length !== 2) return false;
    if (parts[0].length === 0 || parts[1].length === 0) return false;
    if (!parts[1].includes('.')) return false;
    const domainParts = parts[1].split('.');
    return domainParts.every(part => part.length > 0);
  }

  function validateFileType(file) {
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    return allowedTypes.includes(file.type.toLowerCase());
  }

  function validateFileSize(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    return file.size <= maxSize;
  }

  function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    const formGroup = errorElement.closest('.form-group');
    
    errorElement.textContent = message;
    errorElement.classList.add('show');
    formGroup.classList.add('error');
  }

  function clearError(field) {
    const errorElement = document.getElementById(`${field}Error`);
    const formGroup = errorElement.closest('.form-group');
    
    errorElement.classList.remove('show');
    formGroup.classList.remove('error');
  }
});