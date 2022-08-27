import { chainLogos } from "../constants/chainLogos";
import dayjs from "dayjs";
import { VscFoldDown } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { useHover } from "@mantine/hooks";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const GenericTransactionCard = ({ data }) => {
  const {
    created_date,
    deposit_tx_hash,
    execute_proposal_tx_hash,
    network_id,
    dest_network_id,
    user_address,
  } = data;

  const { hovered, ref } = useHover();
  const { hovered: srcLinkHovered, ref: ref1 } = useHover();
  const { hovered: destLinkHovered, ref: ref2 } = useHover();

  const srcNetworkData = chainLogos.find(
    (val) => val?.value === network_id.trim()
  );

  const destNetworkData = chainLogos.find(
    (val) => val?.value === dest_network_id.trim()
  );

  const truncate = (input) => {
    if (input) {
      return input.substring(0, 6) + "..." + input?.substring(input.length - 5);
    } else return input;
  };

  return (
    <>
      <div
        className="flex items-center w-full p-6 hover:bg-glass transition-all duration-100 cursor-pointer "
        ref={ref}
      >
        <div className="flex items-center w-[75%] p-2 justify-between">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                className="h-10 w-10 object-contain mr-3"
                src={srcNetworkData?.icon}
                alt="chain logo"
              />

              <div className="hidden lg:block">
                <p className="text-xl">{srcNetworkData?.label}</p>
                <p>{truncate(user_address)}</p>
              </div>
            </div>
            <VscFoldDown className="text-xl m-2" />
            <div className="flex justify-center items-center">
              <img
                className="h-10 w-10 object-contain mr-3"
                src={destNetworkData?.icon}
                alt="chain logo"
              />
              <div className="hidden lg:block">
                <p className="text-xl">{destNetworkData?.label}</p>
                <p>{truncate(user_address)}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <a
              href={srcNetworkData?.scanLink + "/" + deposit_tx_hash}
              target="_blank"
            >
              <div className="flex justify-center items-center">
                <img
                  className="h-10 w-10 object-contain mr-3"
                  src={srcNetworkData?.scanIcon}
                  alt="network logo"
                />
                <div ref={ref1} className="hidden lg:block">
                  <p className={`text-xl`}>{srcNetworkData?.scanName}</p>
                  <div className="flex items-center">
                    <p
                      className={
                        srcLinkHovered && "underline underline-offset-4"
                      }
                    >
                      {truncate(deposit_tx_hash, 8)}
                    </p>
                    <FiExternalLink className="text-lg ml-1" />
                  </div>
                </div>
              </div>
            </a>

            <VscFoldDown className="text-xl m-2" />

            <a
              href={destNetworkData?.scanLink + "/" + execute_proposal_tx_hash}
              target="_blank"
            >
              <div className="flex justify-center items-center">
                <img
                  className="h-10 w-10 object-contain mr-3"
                  src={destNetworkData?.scanIcon}
                  alt="network logo"
                />
                <div ref={ref2} className="hidden lg:block">
                  <p className={`text-xl`}>{destNetworkData?.scanName}</p>
                  <div className="flex items-center">
                    <p
                      className={
                        destLinkHovered && "underline underline-offset-4"
                      }
                    >
                      {truncate(execute_proposal_tx_hash, 8)}
                    </p>
                    <FiExternalLink className="text-lg ml-2" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Time */}

        <div className="flex flex-col justify-center items-center text-lg ml-4">
          {dayjs(created_date).fromNow()}
        </div>
      </div>

      {!hovered && (
        <div className="w-full flex justify-center">
          <div className="border-b-[0.1px] border-gray-300 w-[90%]"></div>
        </div>
      )}
    </>
  );
};

export default GenericTransactionCard;