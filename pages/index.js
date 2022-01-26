import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useRouter } from "next/router"; //Hooks
import React from "react";

function Titulo(props) {
  console.log(props);
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

//Componente React (Função que retorna HTML)
//Todos atributos das tags do HTML viram props
// function HomePage() {
//   //JSX
//   return (
//     <div>
//       <GlobalStyle />
//       <Title tag="h2">Seja bem vindo!</Title>
//       <h2>Discord clone</h2>
//     </div>
//   );
// }

// export default HomePage;
export default function PaginaInicial() {
  // const username = 'jorgelisboa';
  //STATE
  var valor;
  const [username, setUsername] = React.useState("jorgelisboa");
  const defaultImage = 'https://img1.pnghut.com/1/2/3/tPtDGUThWn/human-michelangelo-david-head-statue.jpg'
  const rout = useRouter();
  console.log(rout);
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://c4.wallpaperflare.com/wallpaper/756/136/965/fashwave-revolt-glitch-art-vaporwave-statue-hd-wallpaper-preview.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infoEvent) {
              infoEvent.preventDefault();
              // window.location.href = '/chat'; Dá reload da página
              //Atualizar para o chatPage
              rout.push("/chat");
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Welcome to RetrowaveIt</Titulo>
            {/* <Text
              variant="body4"
              styleSheet={{
                marginVertical: "8px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text> */}
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              Insert your github account to enjoy.
            </Text>

            {/* <input 
              type="text"
              value={username}
              onChange={function (event){
                console.log({username} +" digitou", event.target.value)
                //Cadê o valor?
                const valor = event.target.value;
                //Trocar o valor da variable através do react
                setUsername(valor)
              }}/> */}
            <TextField
              value={username}
              onChange={function (event) {
                console.log({ username } + " digitou", event.target.value);
                //Cadê o valor?
                valor = event.target.value;
                //Trocar o valor da variable através do react
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[500],
                  mainColorHighlight: appConfig.theme.colors.primary[660],
                  backgroundColor: appConfig.theme.colors.primary[600],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[550],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[500],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              
              src={`https://github.com/${username}.png`} //||
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
