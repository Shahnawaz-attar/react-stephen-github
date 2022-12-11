import React from "react";
import { useState } from "react";
import Button from "../components/Buttons";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className=" relative">
      <Button onClick={handleClick} primary>
        {showModal ? "Close" : "Open"}
      </Button>
      {showModal && <Modal onClose={handleClose} />}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum,
        vero temporibus? Cumque dolorem corrupti minus? Nihil, id unde
        reprehenderit hic amet in quos quo similique placeat? Labore,
        accusantium animi. Ea? Sit qui, corrupti excepturi quis iste, atque
        doloremque rerum ea minus praesentium nulla maxime totam doloribus quasi
        repellat! Facilis, neque nemo. Nulla dicta atque maiores expedita
        tenetur numquam vel facere. Est itaque nostrum deleniti quos nesciunt,
        repellat ut assumenda iusto voluptate velit mollitia dicta ipsa facere,
        quod harum commodi nam dolorum! Placeat ducimus quia commodi dolore, nam
        eum aspernatur atque! Doloribus aliquam voluptas officiis et,
        perspiciatis debitis, obcaecati dolore voluptatibus exercitationem error
        incidunt aspernatur laborum eum mollitia rem dolores tenetur, sunt
        possimus eveniet! Voluptates architecto repellat illum ad illo non.
        Tempore harum corrupti dolore blanditiis ipsam velit, maxime aut
        quaerat. Ipsam impedit laborum, nemo dolor qui itaque pariatur est ab
        voluptate perspiciatis debitis maiores hic, voluptates eius fugiat!
        Fugit, quam. Ipsam quasi velit illum quisquam deserunt animi itaque
        placeat. Adipisci numquam minima quod, corrupti maxime cupiditate esse,
        voluptas quas, asperiores ipsum quia aut qui! Vel, esse. Vitae aliquid
        aliquam sequi? Consequatur obcaecati aperiam eligendi commodi,
        consectetur, dolore accusantium quasi enim, quis dignissimos ducimus! Id
        eius eum architecto error sequi repellendus, sunt dolorum veritatis,
        delectus maxime consequuntur voluptatum deserunt voluptatem iste.
        Ducimus, dolor exercitationem facilis itaque eveniet vero minima a,
        earum consectetur quia laboriosam aliquam perspiciatis quod cumque et
        eligendi optio minus tempora maxime sit, possimus fugit est aperiam
        dignissimos? Est. Impedit deleniti deserunt quam nemo itaque sit
        sapiente placeat ab aperiam! Iste ducimus ipsa corporis, nobis ut
        exercitationem eius cum assumenda ex facilis dolor perferendis pariatur
        culpa ab a numquam. Doloribus, eligendi? Nobis aut excepturi
        exercitationem laborum autem ullam velit eligendi repellat, rerum nisi,
        commodi quibusdam doloribus reiciendis tempora optio possimus? Fugit
        tempore doloremque fugiat esse excepturi. Molestias, vel id. Accusamus,
        optio? Doloribus adipisci eos quo officiis nisi nesciunt voluptatibus
        distinctio tempora ab aliquid optio, cum amet vitae cupiditate minima
        ipsum cumque quam culpa modi. Quis neque quae molestias consectetur?
        Minus officia excepturi expedita ea, sequi eveniet deserunt optio totam!
        Nobis sunt qui debitis suscipit nesciunt? Deserunt recusandae officiis
        repellat numquam omnis rerum in alias modi vitae dolorum, minus beatae?
        Laboriosam voluptate nihil similique accusamus delectus officia
        inventore odit sequi incidunt. Consequatur eveniet, quis, nobis
        perspiciatis asperiores magni blanditiis iusto deserunt minima ipsum ab
        consectetur ducimus ea aut commodi facilis. Sunt alias, aut accusantium
        similique quia tempore omnis rerum corrupti nisi. Rem, officia odio
        porro obcaecati excepturi voluptatum corrupti unde nam minus
        consectetur, dicta ullam aspernatur molestiae beatae autem quaerat! Amet
        aspernatur totam reiciendis itaque fugiat expedita, quidem rerum, quasi
        odio explicabo, consectetur corporis. Labore mollitia sed placeat
        ducimus impedit corporis! Cum explicabo optio incidunt esse totam.
        Quibusdam, tempora incidunt. Ad ipsam nisi vitae ut culpa non autem,
        perferendis, tempore possimus aliquid magnam? Neque pariatur aut quaerat
        mollitia ipsum! Repudiandae hic, officiis fuga doloribus iure minus
        harum similique quidem voluptas. Mollitia provident corporis aliquid
        odio doloremque ea numquam laborum, architecto recusandae, blanditiis
        doloribus atque id perspiciatis expedita quia officiis ab fugit!
        Voluptate voluptas esse odit libero totam repudiandae dolorem adipisci.
        Cumque dolorem debitis et adipisci ea corporis enim, suscipit
        voluptates? Quam possimus dicta laboriosam commodi labore placeat,
        pariatur molestiae blanditiis officia, nostrum repellendus mollitia
        accusantium architecto eligendi, fugit in neque. Quam quasi eaque
        consectetur praesentium, nulla possimus temporibus dolores quidem
        distinctio ratione aperiam, sapiente dolore ab blanditiis unde harum
        culpa eos inventore natus minus adipisci. Facere, ipsum nesciunt. Enim,
        dignissimos. Rerum quibusdam tenetur doloremque nesciunt impedit totam,
        ducimus voluptatibus aliquid similique quidem eum. Quidem fugit ex sequi
        reprehenderit minima consequatur similique ad exercitationem neque,
        repudiandae obcaecati, porro enim reiciendis nihil. Non natus porro
        tempore, illo dolorem voluptates eaque nulla illum! Excepturi placeat
        aliquam aliquid unde sed quidem dolor molestiae odio? Libero aliquid
        deserunt, repudiandae porro corrupti eligendi distinctio quasi autem?
        Totam, laudantium harum in dolorem vitae nobis! Excepturi ipsa cum,
        magni veritatis minima nisi in eaque tenetur tempore, consequuntur
        quibusdam minus, provident consequatur. Libero, ad! Autem amet eos
        libero nam! A, doloremque quidem quos earum optio explicabo qui
        blanditiis iste deserunt nesciunt numquam ipsam quo fugiat illo,
        corrupti possimus consequatur tempora harum quisquam eum omnis mollitia
        suscipit. Omnis, libero dignissimos? Dolore repellat blanditiis hic quos
        labore consequuntur voluptatibus maiores officiis modi praesentium, quam
        tenetur deserunt dolorem sint eaque vitae saepe omnis laboriosam sunt
        tempora in ab? Nostrum asperiores aut accusamus. Facere, libero
        similique maxime cupiditate eligendi saepe facilis, aut numquam eius
        possimus natus illo dolor excepturi soluta laboriosam nisi perferendis
        pariatur harum dolorem voluptas omnis quasi iusto impedit quibusdam.
        Dolor. Nobis quidem quibusdam, ratione, vero quaerat tempore amet
        possimus asperiores quam excepturi nisi eligendi atque perferendis
        nostrum expedita mollitia facere debitis est. Architecto deserunt quos
        dolores odio, dicta quis officiis. Fugiat dolorem, placeat voluptas
        harum explicabo modi optio assumenda. Adipisci iure perspiciatis quo rem
        deserunt quos provident explicabo libero, tenetur incidunt. Repudiandae
        aut minima amet dolor temporibus voluptatem, modi id! Accusantium, eius.
        Libero beatae voluptates saepe dolore. Dolor nemo expedita veniam
        repellendus tempore quam atque enim nobis nesciunt ad, veritatis ducimus
        voluptas ipsa quas eum placeat minima, velit vitae nostrum. Dolor magnam
        mollitia delectus saepe modi numquam odio, eveniet amet. In sit
        doloremque ratione architecto rem? Recusandae blanditiis mollitia quod
        atque aliquid. Sapiente distinctio nesciunt minus doloremque, quod
        repellat voluptates! Voluptatum officia et quaerat culpa nam temporibus
        non ratione esse unde fuga molestias maxime amet, fugiat enim quo. Aut
        officia vitae quisquam atque rerum dolorum non, earum quaerat optio
        labore! Deleniti soluta ducimus neque sit similique odit quaerat
        provident! Ex perspiciatis, numquam ipsa dolor quis molestiae odio
        repellendus maiores ipsam cum quod, quibusdam saepe. Praesentium
        excepturi eveniet sequi deleniti ducimus. Nihil at id nulla vero dolores
        ipsam facilis, optio est suscipit perspiciatis quaerat perferendis omnis
        a consequuntur adipisci dolore quae maiores et minus voluptatem
        veritatis itaque! Voluptatem similique quis eum. Explicabo atque porro
        quia dignissimos. Atque reprehenderit ipsum officiis? Similique, a vitae
        laudantium ullam at temporibus commodi voluptatem rem? Impedit
        necessitatibus explicabo itaque rerum voluptatem amet rem quibusdam at
        alias? Totam fugit cupiditate adipisci at ab maxime vero, officiis quos?
        Ipsum quam voluptatibus vitae tempora optio veniam consectetur culpa
        quos fuga beatae autem magnam quidem error, unde libero, officiis
        quibusdam. Dolorem impedit, odio minus facilis pariatur magni est
        expedita quasi, asperiores voluptates illum nostrum excepturi dicta
        dolor optio architecto recusandae ad, placeat ipsum? Facere, magnam! Ut
        hic exercitationem rerum error? Et consequuntur quae cupiditate, aut
        ipsum numquam eveniet nobis, aliquam quas, repudiandae itaque quaerat
        optio labore aspernatur. Maxime eum quos corporis quibusdam minima! Eius
        esse, sint odit quos itaque dolorum. Explicabo deserunt fugit
        repudiandae atque rerum libero unde harum itaque cumque expedita ipsam
        soluta perspiciatis velit ullam, at quos esse corporis minus nostrum
        amet rem, neque, optio a! Cumque, illum? Similique, praesentium
        sapiente! Incidunt mollitia eum illum vero earum eligendi nobis voluptas
        voluptatem cumque dolorum. Est laboriosam quo animi fugiat mollitia
        dolorum pariatur aperiam minus ipsa aliquid quod, consectetur officiis?
        Non animi impedit beatae aperiam, doloremque nihil exercitationem
        dolorem repellat voluptatem veniam! Eaque doloribus impedit cum alias
        repellat? Ullam molestiae voluptatum animi molestias libero optio
        reprehenderit assumenda ab fugiat consectetur. Facilis, qui. Porro
        voluptatem, rem praesentium excepturi quaerat hic ex optio at aut dolore
        quidem nisi tempora culpa, adipisci odit voluptates reprehenderit!
        Veritatis in blanditiis aspernatur? Tempora, rem quisquam? Architecto.
        Sed deleniti illo iure adipisci tempora suscipit, quibusdam cupiditate
        facere sapiente et magnam distinctio optio saepe perferendis officiis
        vero provident eligendi nam molestiae debitis, consectetur eos hic odit!
        Hic, accusamus. Natus aut consequatur modi libero obcaecati, debitis
        dolores doloribus provident explicabo. Facilis dicta non, quam delectus
        quaerat maiores aut perspiciatis mollitia enim et fugiat distinctio,
        laboriosam quisquam atque optio eaque. Neque deleniti fugiat vitae illum
        voluptatibus. Nemo, maxime atque ea aliquid dolor placeat sint quisquam
        dolorem laudantium voluptatibus mollitia voluptate repellat voluptatem.
        Laudantium aliquid commodi nobis, veritatis error saepe provident! Animi
        fuga consequatur mollitia cumque voluptatibus quis, in repellat velit
        doloremque error repudiandae aliquid id nam amet, aliquam maxime iste
        doloribus omnis. Ipsam incidunt est architecto reprehenderit fuga
        eveniet doloremque? Nisi sit modi alias qui corrupti soluta eum animi
        mollitia ipsum? At aliquid eveniet itaque sunt nostrum. Eum, totam atque
        alias amet qui aut fugiat aspernatur illum quas incidunt dolorum. Ipsam
        voluptatibus ullam et, numquam illum placeat tempora minima inventore.
        Rerum architecto debitis possimus et? Illum eaque libero inventore?
        Ipsam facere sequi autem rem vel architecto! Adipisci placeat ullam
        nemo. Delectus consequuntur commodi quo, voluptatem quasi minima,
        nostrum explicabo hic eligendi totam labore repellendus incidunt fugit
        sunt maxime ullam, error soluta doloremque? Quos unde odit doloremque
        exercitationem aliquam doloribus cupiditate. Corporis facilis aliquam
        fugit beatae sapiente repellat! Facilis id hic voluptate facere commodi
        velit magni adipisci dignissimos deserunt. Cumque quis dolore suscipit!
        Qui quisquam quasi laudantium sit, quas beatae eveniet. Quia omnis nihil
        atque laborum, corrupti molestias praesentium eius asperiores illo
        tempora officia eos ex ipsa, dolorum odit accusantium magnam modi
        suscipit quaerat illum cum possimus commodi quam. Eveniet, aut. Eum
        possimus harum minus, voluptatibus repellat quos obcaecati aut magnam
        qui dolore exercitationem necessitatibus ut? Possimus repellendus quam
        consequuntur nostrum fugit? Obcaecati saepe ipsa sint ratione ipsum quis
        quo ut?
      </p>
    </div>
  );
};

export default ModalPage;
