<script>
  
</script>

<footer class="footer">
  <div class="footer-container">
    <h3 class="semi-bold mb-xs">Marco</h3>
    <div class="mb-l social-links">
      <a
        href="/"
        target="_blank"
        class="footer-link">GitHub</a
      >
      <a
        href="/"
        target="_blank"
        class="footer-link">LinkedIn</a
      >
    </div>
    <p>© 2024 Marco. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background-color: black;
    color: white;
    padding: 40px 20px;
    text-align: center;
  }

  .footer-link {
    margin: 0 10px;
    display: inline-block;
    position: relative;
    transition: transform 0.3s ease;
  }
  
  .footer-link:hover {
    transform: translateY(-3px);
  }
  
  .footer-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  .footer-link:hover::after {
    width: 100%;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    .footer {
      padding: 30px 15px;
    }
  }
  
  @media (max-width: 480px) {
    .social-links {
      flex-direction: column;
      gap: 15px;
    }
    
    .footer-link {
      margin: 5px 0;
    }
  }
</style>