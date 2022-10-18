<template>
  <main>
    <div class="container1">
      <span id="iconSetting">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#23252b" stroke="#c2c2c4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.![](../../../../../AppData/Local/Temp/logo.png)06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>![](../../../../../AppData/Local/Temp/logo.png)
      </span>
    </div>

    <form action="" method="post">
      <label id="label1">
        <input type="email" placeholder="E-mail address" />
      </label>

      <label id="label2">
        <input type="password" placeholder="Password" />
      </label>

      <label id="checkboxForm">
        <input type="checkbox" />
        Stay logged in
      </label>

      <input id="sendForm" type="submit" value="Login" />
    </form>
  </main>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  main {
    margin-top: -10px;

    .container1 {
      display: flex;
      justify-content: flex-end;
      margin-right: 30px;
      margin-bottom: 10px;

      .iconSetting {
        padding: 5px;
        background-color: yellow;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    #label1 {
      margin-bottom: 12px;
    }

    #label1, #label2 {
      width: 90%;
      height: 33px;
    }

    input {
      height: 33px;
      background-color: #101117;
      border-radius: 4px;
      color: white;
      width: 100%;
    }

    #sendForm {
      background-color: #b21c2a;
      height: 42px;
      border: 5px;
      width: 90%;
    }

    #checkboxForm {
      display: flex;
      width: 100%;
    }
  }
</style>